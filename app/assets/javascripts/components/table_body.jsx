const TableBody = ({record}) => {
  return (
    <tr>
      <td>{record.name}</td>
      <td>{record.date}</td>
      <td>{record.number}</td>
      <td>{record.description}</td>
    </tr>
  )
};
