import "./Navigation.css";
const Navigation = () => {
	return (
		<section className="navigation">
			<ul>
				<li>
					<i class="las la-piggy-bank"></i>
					<a href="https://weimingtay.github.io/2023_Portfolio/">Start</a>
				</li>
				<li>
					<i class="las la-exchange-alt"></i>
					<a href="https://weimingtay.github.io/2023_Portfolio/">Überweisung</a>
				</li>
				<li>
					<i class="las la-concierge-bell"></i>
					<a href="https://weimingtay.github.io/2023_Portfolio/">Service</a>
				</li>
				<li>
					<i class="las la-user-circle"></i>
					<a href="https://weimingtay.github.io/2023_Portfolio/">Profil</a>
				</li>
			</ul>
		</section>
	);
};

export default Navigation;
