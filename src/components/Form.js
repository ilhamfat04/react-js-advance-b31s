// create style here
const styles = {
  form: {
    backgroundColor: "red",
    margin: "15px 10px",
  }
}

// create Form component
function Form() {
  return (
    <div>
      <form style={styles.form} >
        <div>
          <label htmlFor="username"
            style={{ display: "block", marginBottom: "5" }}>
            Username
          </label>
          <input type="text"
            id="username"
            style={{
              fontSize: "1rem",
              padding: "5px"
            }} />
        </div>
      </form>
    </div>
  )
}

export default Form
