export default function Icon (props){
    console.log(props)
    console.log(props.icon)
    return (
        <ion-icon name={props.icon}></ion-icon>
    )
}