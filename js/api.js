if (localStorage.getItem("userId")===null)
      window.location.replace("login.html");

      window.addEventListener('storage', () => {
        // When local storage changes, dump the list to
        // the console.
        alert("storage changed")
      });