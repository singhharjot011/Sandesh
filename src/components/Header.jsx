import Logo from "./Logo"
import ProfileThumbnail from "./ProfileThumbnail"
import Searchbar from "./Searchbar"

function Header() {
    return (
        <div className="flex w-full justify-between p-2 items-center border-b">
            <Logo/>
            <Searchbar/>
            <ProfileThumbnail/>
        </div>
    )
}

export default Header
