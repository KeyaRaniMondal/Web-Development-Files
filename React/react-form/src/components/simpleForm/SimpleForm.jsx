const SimpleForm=()=>{

    const handleSubmit=e=>{
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
        console.log('form Submit')
    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input id="text" type="text" name="name"/><br />
            <input type="email" name="email" id="" /><br />
            <input type="text" name="phone" id="" /><br />
            <input id="sub" type="submit" value="Submit" />
        </form>
        </div>
    )
}
export default SimpleForm;