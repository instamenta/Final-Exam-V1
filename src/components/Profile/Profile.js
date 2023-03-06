import { useContext, useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import AuthContext from "../../context/AuthProvider"
import { editUserData, editUserBio, getUser } from "../../services/ProfileService"

import "./Profile.css"
export const Profile = () => {
    const params = useParams()
    const userId = params.id
    const { auth, setAuth } = useContext(AuthContext)

    const bioRef = useRef('')
    const [errors, setErrors] = useState(false)
    const [isOwner, setIsOwner] = useState(false)
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        bio: '',
    })
    const [userData, setUserData] = useState({
        birthday: '', email: '',
        pic: 'https://preview.redd.it/xayxvj1j4in71.jpg?width=640&crop=smart&auto=webp&s=38949b716e2e55c93fdd0c2ea636e0e70b92d356',
        username: '', _id: '', bio: '',
        ownedNft: [], likedNft: [],
    })

    useEffect(() => {
        (async function getUserData() {
            const data = await getUser(userId)
            setUserData(data)
            setFormData({
                username: data.username,
                bio: data.bio,
                email: data.email,
            })
        })()
    }, []);

    useEffect(() => {
        if (auth?._id === userId && isOwner === false)
            setIsOwner(true)
    }, [formData])
    async function handleUserData(e) {
        e.preventDefault()
        try {
            const formDataValue = new FormData(e.target)
            const { username, email } = Object.fromEntries(formDataValue.entries())
            const data = await editUserData(auth._id, username, email)

            if (data?.message) {
                setErrors(true)
            } else {
                setAuth(data)
                setErrors(false)
            }
        } catch (error) {
            setErrors(true)
        }
    }
    async function handleUserBio(e) {
        e.preventDefault()
        const bioData = bioRef.current.value
        try {
            const data = await editUserBio(auth._id, auth.username, bioData)
            if (data?.message)
                setErrors(true)
            else
                setAuth(data)
        } catch (error) {
            setErrors(true)
        }
    }
    return (
        <div className="container emp-profile">
            <form method="POST" onSubmit={handleUserData}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <a href={userData.pic}>
                                <img className="profile-pic" src={userData.pic} alt='not-found' />
                            </a>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>NFT hunter</h5>
                            <h6>web developer</h6>
                            {isOwner
                                ? <textarea
                                    ref={bioRef}
                                    className="profile-bio mt-3 mb-5 bio-textarea"
                                    defaultValue={userData.bio}>
                                </textarea>
                                : <p className="profile-bio mt-3 mb-5 ">
                                    ~ " {userData?.bio?.slice(0, 230)} " ~
                                </p>
                            }
                            <div className="info-grid">
                                <p className="like-data">
                                    Likes given: {userData.likedNft?.length}
                                </p>
                                <p className="nft-data">
                                    NFT owned: {userData.ownedNft?.length}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2">
                        {isOwner ?
                            <>
                                <Link
                                    to={"/profile/" + userData._id + "/select-profile-picture"}
                                    className="select-pic-btn"
                                >
                                    Choose NFT
                                </Link>
                                <button className="edit-bio-btn" onClick={handleUserBio} >
                                    Edit Bio
                                </button>
                            </>
                            : null
                        }
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8 pl-5 about-info ">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="grid-box">
                                    <div>
                                    </div>
                                    <div className="profile-error-container">
                                        <span className="profile-error">
                                            {errors}
                                        </span>
                                    </div>
                                    <div className="aligner label-data">
                                        <label>Username :</label>
                                    </div>

                                    <div className="aligner">
                                        {isOwner
                                            ? <>
                                                <input
                                                    type="text"
                                                    className="user-data"
                                                    defaultValue={userData.username}
                                                    placeholder="Please fill field!"
                                                    name='username'
                                                />
                                                <button className="confirm-button" type="submit">✓</button>
                                            </>
                                            :
                                            <input
                                                disabled
                                                className="user-data"
                                                defaultValue={userData.username}
                                                placeholder="Please fill field!"
                                            />
                                        }
                                    </div>
                                </div>
                                <div className="grid-box">
                                    <div className="aligner label-data">
                                        {errors
                                            ? <span className="profile-error">Invalid username! </span>
                                            : null
                                        }
                                        <label>E-mail :</label>
                                    </div>

                                    <div className="aligner">
                                        {isOwner
                                            ? <>
                                                <input

                                                    type="text"
                                                    className="user-data"
                                                    defaultValue={userData.email}
                                                    placeholder="Please fill field!"
                                                    name="email" />
                                                <button className="confirm-button" type="submit">✓</button>
                                            </>
                                            : <>
                                                <input
                                                    disabled
                                                    className="user-data"
                                                    defaultValue={userData.email}
                                                    placeholder="Please fill field!" />
                                            </>}
                                    </div>
                                </div>

                                <div className="grid-box" >
                                    <div className="aligner label-data">
                                        <label>Birthday :</label>
                                    </div>
                                    <div className="aligner ">
                                        <p className="user-text">{userData.birthday}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}