import "./Navigation.css";
const Navigation = () => {
	return (
		<section className="navigation">
			<ul>
				<li>
					<i class="las la-piggy-bank"></i>
					<a href="#">Start</a>
				</li>
				<li>
					<i class="las la-exchange-alt"></i>
					<a href="#">Überweisung</a>
				</li>
				<li>
					<i class="las la-concierge-bell"></i>
					<a href="#">Service</a>
				</li>
				<li>
					<i class="las la-user-circle"></i>
					<a href="#">Profil</a>
				</li>
			</ul>
		</section>
	);
};

export default Navigation;
