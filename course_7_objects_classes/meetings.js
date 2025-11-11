function manageMeetings(listOfMeetings) {
  weeklyMeetings = {}
  for (meeting of listOfMeetings) {
    meetingInfo = meeting.split(' ');
    if (weeklyMeetings[meetingInfo[0]]) {
      console.log(`Conflict on ${meetingInfo[0]}!`)
    } else {
      weeklyMeetings[meetingInfo[0]] = meetingInfo[1]
    }
  } 
}

manageMeetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George'])
