const obj = {
  name: "Jatin",
  fn() {
    return () => {  // Arrow function now
      return () => {
        console.log(this.name);
      };
    };
  }
};

obj.fn()()();  // Now logs "Jatin"
