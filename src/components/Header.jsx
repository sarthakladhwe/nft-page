export default function Header({filters, filterSelected}) {

    const selectedFilterStyling = {
        backgroundColor: 'black',
        color: '#fff'
    }

    const allFilters = filters.map(filter => (
        <p
            className="filter" 
            onClick={(event) => filterSelected(event, filter.id)}
            style={filter.selected ? selectedFilterStyling : undefined}
            key={filter.id}
        >
            {filter.filter}
        </p>
    ))

    return (
        <header>
            <h2>Live Spaces</h2>
            <p>All NFTs on Cyber either belong to or were minted by their space creator.</p>
            <div className="nav-filter">
                {allFilters}
            </div>
        </header>
    )
}