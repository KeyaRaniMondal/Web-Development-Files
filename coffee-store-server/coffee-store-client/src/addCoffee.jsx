const AddCoffee = () => {
    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee={name,chef,supplier,taste,category,details,photo}
        console.log(newCoffee)

        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId)
            {
                alert('successfully added')
            }
        })
    }
    return (
        <div className="bg-[#e6dedd] p-5">
            <h1 className="text-5xl">Add New Coffee</h1>
            <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form action="" onSubmit={handleForm}>
                <div className="flex gap-4 mb-5">
                    <div className="w-1/2">
                        <h4>Name</h4>
                        <input className="input input-bordered join-item w-full" name="name" type="text" placeholder="Enter coffee name" />
                    </div>
                    <div className="w-1/2">
                        <h4>Chef</h4>
                        <input className="input input-bordered join-item w-full" name="chef" type="text" placeholder="Enter coffee chef" />
                    </div>
                </div>
                <div className="flex gap-4 mb-5">
                    <div className="w-1/2">
                        <h4>Supplier</h4>
                        <input className="input input-bordered join-item w-full" name="supplier" type="text" placeholder="Enter coffee supplier" />
                    </div>
                    <div className="w-1/2">
                        <h4>Taste</h4>
                        <input className="input input-bordered join-item w-full" name="taste" type="text" placeholder="Enter coffee taste" />
                    </div>
                </div>
                <div className="flex gap-4 mb-5">
                    <div className="w-1/2">
                        <h4>Category</h4>
                        <input className="input input-bordered join-item w-full" name="category" type="text" placeholder="Enter coffee category" />
                    </div>
                    <div className="w-1/2">
                        <h4>Details</h4>
                        <input className="input input-bordered join-item w-full" name="details" type="text" placeholder="Enter coffee details" />
                    </div>
                </div>
                <div className="w-full mb-5">
                    <h4>Photo</h4>
                    <input className="input input-bordered join-item w-full" name="photo" type="text" placeholder="Enter photo URL" />
                </div>
                <button className="btn w-full bg-[#866058]">Add Coffee</button>
            </form>
        </div>
    )
}
export default AddCoffee;