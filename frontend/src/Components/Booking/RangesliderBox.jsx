import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@material-ui/lab';
import { Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';


export default function ColorsTimeline({ prop }) {

  let [c1, setC1] = useState(false)
  let [c2, setC2] = useState(false)
  let [c3, setC3] = useState(false)


  let handlC = () => {
    let x = prop
    setTimeout(() => {
      setC1(true)
    }, 4000)
    setTimeout(() => {
      setC2(true)
    }, 8000)
    setTimeout(() => {
      setC3(true)
    }, 12000)
  }
  useEffect(() => {
    handlC()

  }, [])

  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color={c1 || c2 ? "" : 'primary'} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">{prop}kms</Typography>
          <Typography>away from you</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color={c1 == true && c2 == false ? 'primary' : ""} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent >
          <Typography variant="h6">{c1 ? Math.floor(prop / 2) : ""}kms</Typography>
          <Typography>away from you</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color={c2 == true && c3 == false ? 'primary' : ""} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent >
          <Typography variant="h6">{c2 ? Math.floor(prop / 3) : ""}kms</Typography>
          <Typography >away from you</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color={c3 == true ? 'primary' : ""} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography style={{ color: 'green' }} >{c3 && "Enjoy your journey."}</Typography>
        </TimelineContent>
      </TimelineItem>


    </Timeline>

  );
}
