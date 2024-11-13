import Product from "../Product/Product";

// export default function Products(props){
//     const {info}=props;
//     console.log(props)
export default function Products({info}){

return(
    <div>
        <h1>I am from products</h1>
        {/* it shows object information inside object */}
        {/* <Product info={props.info}></Product> */}

        {/* shows information directly */}
        <Product info={info}></Product>
    </div>
)
}