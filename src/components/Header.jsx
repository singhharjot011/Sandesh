import Logo from "./Logo";
import ProfileThumbnail from "./ProfileThumbnail";
import Searchbar from "./Searchbar";

function Header() {
  return (
    <div className="flex w-full justify-between p-2 items-center border-b sticky top-0 left-0 right-0">
      <Logo />
      <Searchbar />
      <ProfileThumbnail />
    </div>
  );
}

export default Header;
