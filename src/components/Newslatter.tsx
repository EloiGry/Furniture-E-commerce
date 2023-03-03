

const Newslatter = () => {
    return (
        <div className="w-full relative bg-[url('../../public/PictureNewslatter.jpg')] py-32 bg-center bg-blend-multiply bg-cover">
	<div className="container flex flex-col flex-wrap content-center justify-center p-4 py-10 md:py-20 mx-auto md:p-10">
		<h1 className="text-5xl antialiased font-bold leading-none text-center">Get Our Updates</h1>
		<p className="pt-2 pb-8 text-xl antialiased text-center">Find out about events and other news</p>
		<div className="flex flex-row">
			<input type="text" placeholder="example@email.com" className="outline-none w-3/5 p-3 rounded-l-lg sm:w-2/3" />
			<button type="button" className="w-2/5 p-3 font-bold rounded-r-lg sm:w-1/3 bg-black hover:bg-opacity-90 text-white">S'inscrire</button>
		</div>
	</div>
</div>
    );
};

export default Newslatter;