import "./index.css"


export const SeriesSelectorTable = () => {
    return (<div className="table-container">
        <div className="metals-label grid-item">Metals</div>
        <div className="metalloids-selector grid-item"><span class="column-text">Metalloids</span></div>
        <div className="nonmetals-label grid-item">Nonmetals</div>
        <div className="alkali-metals-selector grid-item"><span class="column-text">Alkali metals</span> </div>
        <div className="alkaline-earth-metals-selector grid-item"><span class="column-text">Alkaline earth metals</span></div>
        <div className="lanthanoids-selector grid-item">Lanthanoids</div>
        <div className="transition-metals-selector grid-item"><span class="column-text">Transition metals</span></div>
        <div className="post-transition-metals-selector grid-item"><span class="column-text">Post-transition metals</span></div>
        <div className="reactive-nonmetals-selector grid-item"><span class="column-text">Reactive nonmetals</span></div>
        <div className="noble-gases-selector grid-item"><span class="column-text">Noble gases</span></div>
        <div className="actinoids-selector grid-item">Actinoids</div>

    </div>);
}