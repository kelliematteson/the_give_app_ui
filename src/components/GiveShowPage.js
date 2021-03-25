

export default function GiveShowPage(props){
    
    return (
        <div className="give-container" onClick={props.togglegiveShowPageHide}>
        <h2>This is my Show Page! How very exciting!</h2>
        <p>{props.showGive.give_name}</p>
        </div>
    )






}