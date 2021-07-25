export const Head = ({ keys = [], head = {}, sizes = [], orderTable }) => {
  const tableHead = head || {}

  return (
    <thead>
      <tr>
        {keys.map((item, index) => 
          <th 
            style={{ minWidth: sizes[index], textAlign: 'start', cursor: 'pointer' }} 
            key={index}
            onClick={() => 
              orderTable(keys[index])
            }
          >
            {tableHead[item] || item}
          </th> 
        )}
      </tr>
    </thead>
  )
}
