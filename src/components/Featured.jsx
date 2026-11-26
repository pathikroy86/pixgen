
const Featured = async () => {
    const res = await fetch('https://pixgen-hdjrotqw7-pathik-roys-projects.vercel.app/data.json');
    const data = await res.json();
    console.log(data);

    return (
        <div>

        </div>
    );
};

export default Featured;