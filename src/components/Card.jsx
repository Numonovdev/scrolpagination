

function Card(props){
     const{url,title} = props.img
     return(
          <div className="w-1/5">
          <img className="w-full" src={url} alt="" />
          <span>{title}</span>
          </div>

     )
}
export default Card