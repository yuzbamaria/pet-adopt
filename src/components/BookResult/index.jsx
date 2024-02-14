import React from "react";

function BookResult(props){

    return(<li>
        {props}
    </li>)
}

// let books = bookInfo.map(function(e) {
//     var CompName = bookInfo[e.type]
//     return <CompName key={e.key} />
// })

// //Finally, to render the components:
// return (
//     <div className={openState}>
//     /* Shortened for brevity*/
//         {facetComps}
//     /* Shortened for brevity*/
//     </div>
// )

export default BookResult