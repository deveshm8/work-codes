var b=$('button');
var t=$('.t');
b.click(quiz);
function quiz()
{
  var q=["How many stripes are on the American flag?",
"How many books are in the Harry Potter series?",
"What is the third number in Pi?",
"How many wisdom teeth does the average human have?",
"According to an old English proverb, a cat has how many lives?",
"How many items are in a baker's dozen?",
"In Disney's The Little Mermaid, how many sisters does Ariel have?"];

var aw=["13","7","4","4","9","13","6"]
  for (var i = 0; i < q.length; i++) {
  t.text(q[3]);
  // t.css('color','white');
  // t.append('<input type="text" name = "ans" placeholder="enter value"/>');
  // t.append('<input type="submit" name = "" value="Submit"/>');

}}
function click(j)
{
  if($(answer)==aw[j])
  right++;
return
}
