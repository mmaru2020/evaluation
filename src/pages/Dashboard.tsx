// pages/Dashboad.tsx
import Nav from '../components/Menu'
import Menu from '../components/Menu'

const Dashboard = () => {
	return (
		<div>
			<Nav />
			<div className="container-fluid">
				<div className="row">
				<Menu />
                <p>自分の評価シート</p>
                <p>メンバーの評価シート</p>

				</div>
			</div>
		</div>
	)
}
export default Dashboard
