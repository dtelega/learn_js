function alphabetWar(fight)
{
  var count = 0;
  for (var i = 0; i < fight.length; i++) {
    if (fight[i] == '*') {
      fight = fight.replace(fight[i-1], "_");
      fight[i+1] == '*' ? 0 : fight = fight.replace(fight[i+1], "_");
    }
  }
  for (var i = 0; i < fight.length; i++) {
    fight[i] == 'w' ? count -= 4 :
    fight[i] == 'p' ? count -= 3 :
    fight[i] == 'b' ? count -= 2 :
    fight[i] == 's' ? count -= 1 :
    fight[i] == 'm' ? count += 4 :
    fight[i] == 'q' ? count += 3 :
    fight[i] == 'd' ? count += 2 :
    fight[i] == 'z' ? count += 1 : 0;
  }
  return !count ? "Let's fight again!" :
            count > 0 ? "Right side wins!" : "Left side wins!";
}

