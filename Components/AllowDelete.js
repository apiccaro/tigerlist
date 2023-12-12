export default function AllowDelete(){

    const RowStyle={
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px',
        }

  return (
    <div style={RowStyle}>
        <button style={{height: '30px', width: '100px', borderWidth: "4px", alignItems: 'center', justifyContent: 'center', borderRadius: '10px', backgroundColor: 'white', color: 'black', borderColor: 'green'}}>Allow</button>
        <button style={{height: '30px', width: '100px', borderWidth: "4px", alignItems: 'center', justifyContent: 'center', borderRadius: '10px', backgroundColor: 'white', color: 'black', borderColor: 'red'}}>Delete</button>
    </div>
  );
}