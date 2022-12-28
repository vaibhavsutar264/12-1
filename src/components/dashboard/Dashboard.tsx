import { useSelector } from "react-redux";


export const Dashboard = ({ toggleTheme }: { toggleTheme: any }) => {
    const { dashBoardWidth } = useSelector((state: any) => state.common);
    return (
        <div className="dashboard__content" style={{ width: `calc(100% - ${dashBoardWidth})`, marginLeft: `${dashBoardWidth}` }}>
            <div>
                <h1>Welcome to Dashboard</h1>
            </div>
        </div >
    )
}

export default Dashboard
