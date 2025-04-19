const data = {
  title: "This is a ",
  author: ["Any", "Anon", "Upin"],
  // Approach one
  // printAuthor(){
  //   this.author.forEach(function(item){
  //     console.log(this.title + " - " + item)
  //   }, this)
  // }
  // Approach two use arrow function
  printAuthor() {
    this.author.forEach((item) => {
      console.log(this.title + " - " + item);
    });
  },
};

data.printAuthor();
