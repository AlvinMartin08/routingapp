import React from 'react'

const TableHeader = () =>{
    return (
        <div>
            <table width="100%" border="1" className="bg-danger" >
                <tr>
                    <th width="25%">Jersey</th>
                    <th width="25%">Player Name</th>
                    <th width="25%">Position</th>
                    <th width="25%">Country</th>
                </tr>
            </table>
        </div>
    );
}

export default TableHeader;