import ClassNames from 'classnames';
const LeftSideBar = (props) => {
    const { showUserName } = props;
    return (
        <div className="scroll-sidebar">
            <div className={ClassNames("leftSideBar-header", { "leftSideBar-header_small": !showUserName })}>
                <div className={ClassNames("profile-user-img", { "profile-user-img_small": !showUserName })}>
                    <img src={require("../assets/images/avatar.jpg").default} alt="avatar left side bar" />
                </div>
                <div className={ClassNames("username", { "hide": !showUserName })}><strong>Son Dinh</strong></div>
            </div>
        </div>
    );
}
export default LeftSideBar;