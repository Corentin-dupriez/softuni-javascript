function manageMeetings(listOfMeetings) {
  weeklyMeetings = {}
  for (meeting of listOfMeetings) {
    meetingInfo = meeting.split(' ');
    if (weeklyMeetings[meetingInfo[0]]) {
      console.log(`Conflict on ${meetingInfo[0]}!`)
    } else {
      console.log(`Scheduled for ${meetingInfo[0]}`)
      weeklyMeetings[meetingInfo[0]] = meetingInfo[1]
    }
  } 
  for ([day, person] of Object.entries(weeklyMeetings)) {
    console.log(`${day} -> ${person}`)
  }
}

manageMeetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George'])
