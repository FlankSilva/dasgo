export const Head = ({ keys = [], head = {}, sizes = [] }) => {
  const tableHead = head || {}

  return (
    <thead>
      <tr>
        {keys.map((item, index) => 
          <th style={{ width: sizes[index], textAlign: 'start' }} key={index}>
            {tableHead[item] || item}
          </th> 
        )}
      </tr>
    </thead>
  )
}
