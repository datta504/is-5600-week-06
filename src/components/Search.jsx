import React from 'react'	import React from 'react'


export default function Search({handleSearch}) {	export default function Search({ handleSearch }) {


  // This is a controlled component, so we need to keep track of the search term in state	  // This is a controlled component, so we need to keep track of the search term in state
  const [search, setSearch] = React.useState('')	  const [search, setSearch] = React.useState('')
@@ -12,21 +12,29 @@ export default function Search({handleSearch}) {


  // This function will be called when the user submits the form	  // This function will be called when the user submits the form
  const handleSubmit = (e) => {	  const handleSubmit = (e) => {
    // Prevent the default behaviour of the form, which is to refresh the page	    e.preventDefault(); // This stops the form from submitting in the traditional way.
    e.preventDefault()	    handleSearch(search); // This calls the search function passed as a prop from the parent component.
    // Call the handleSearch function that was passed in as a prop; this will pass the search term back up to the parent component (CardList) where it can be used to filter the cards	  };
    handleSearch(search.toLowerCase())	
  }	


  return (	  return (
    <form class="pt4 pb4 pl2 black-80" onSubmit={handleSubmit}>	    <form class="pt4 pb4 pl2 black-80" onSubmit={handleSubmit}>
      <fieldset class="cf bn ma0 pa0">	      <fieldset class="cf bn ma0 pa0">
        <div class="cf measure mb2">	        <div class="cf measure mb2">
          <input class="f6 f5-l input-reset fl black-80 ba b--black-20 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder='Tag Search' value={search} onChange={handleChange} type="text" />	          <input
          <input class="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Search" />	            className="f6 f5-l input-reset fl black-80 ba b--black-20 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
            placeholder="Tag Search"
            value={search}
            onChange={handleChange}
            type="text"
          />
          <input
            className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
            type="submit"
            value="Search"
          />
        </div>	        </div>
        <small id="name-desc" class="f6 black-60 db mb2">Enter a keyword to filter by tags</small>	        <small id="name-desc" class="f6 black-60 db mb2">Enter a keyword to filter by tags</small>
    </fieldset>	      </fieldset>
    </form>	    </form>
  	  )
}	}

