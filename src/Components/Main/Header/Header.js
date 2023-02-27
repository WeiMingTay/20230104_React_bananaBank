import "./Header.css";

const Header = () => {
	let datum = new Date().toLocaleDateString("de-DE");

	return (
		<section className="header">
			<div>
				<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.s1oL8u9oXF7ofW_pR87mGgHaD4%26pid%3DApi&f=1&ipt=1f3f34a79305560978fc565f115c337c9fadbf1944f2ca6c7649d68813a307c6&ipo=images" alt=""/>
                <h1>Banana Bank</h1>
            </div>
			{/* <article>Hamburger</article> */}
			<article>
				<div>Übersicht über Ihre Konten</div>
				<div>{datum}</div>
			</article>
		</section>
	);
};

export default Header;
