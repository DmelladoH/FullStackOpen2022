
const FilterPhoneBook = ({handleFilterChange, filterValue}) => {
    return(
        <form>
            Filter shown with: 
            <input onChange={handleFilterChange} value={filterValue} />
        </form>
    )
}

export default FilterPhoneBook