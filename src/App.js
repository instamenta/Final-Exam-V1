import { Routes, Route } from 'react-router-dom';

import { Navbar } from "./components/Navbar/Navbar"
import { Home } from "./components/Home/Home"
import { Register } from './components/Register/Register'
import { Login } from './components/Login/Login';
import { Footer } from './components/Footer/Footer';
import { Profile } from './components/Profile/Profile';
import { Catalog } from './components/Catalog/Catalog';
import { Upload } from './components/Upload/Upload';
import { Details } from './components/Details/Details';

import "./App.css"
import { UserGuard } from './guards/UserGuard';
import { GuestGuard } from './guards/GuestGuards';
import { Edit } from './components/Edit/Edit';
function App() {

    return (
        <div id="box" className='box'>
            <Navbar />

            <main id="main-content" className='main-content'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users/login" element={
                        <GuestGuard>
                            <Login />
                        </GuestGuard>
                    } />
                    <Route path="/users/register" element={
                        <GuestGuard>
                            <Register />
                        </GuestGuard>
                    } />
                    <Route path="/nft/upload" element={
                        <UserGuard>
                            <Upload />
                        </UserGuard>
                    } />
                    <Route path="/nft/catalog" element={<Catalog />} />
                    <Route path="/nft/catalog/:id" element={
                        <Details />
                    }/>
                    <Route path="/profile/:id" element={
                        <UserGuard>
                            <Profile />
                        </UserGuard>
                    } />
                    <Route path="/nft/catalog/:id/edit" element={
                        <Edit />
                    } />
                    <Route path="/nft/catalog/most-wanted" />
                </Routes>
            </main>
            <Footer />
        </div>

    );
}

export default App;
