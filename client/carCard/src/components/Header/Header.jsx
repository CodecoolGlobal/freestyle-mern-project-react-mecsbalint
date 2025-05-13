/* eslint-disable react/prop-types */
import HeadLine from "../Headline/HeadLine";
import UserStatusComponent from "../UserStatusComponent/UserStatusComponent";

function Header({isHeadlineShown, headlineData, selectedCarAttribute, currentUser, handleLogOut}) {
    return (
        <>
            <div className={`${isHeadlineShown ? "" : "d-none"}`}>
                <HeadLine
                    headlineData={headlineData}
                    selectedCarAttribute={selectedCarAttribute}
                />
            </div>
            <UserStatusComponent
                currentUser={currentUser}
                handleLogOut={handleLogOut}
            />
        </>
    )
}

export default Header;
