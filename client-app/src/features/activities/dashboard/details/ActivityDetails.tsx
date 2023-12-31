import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { IActivity } from "../../../../app/models/activity";

interface Props {
  activity: IActivity;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
}

function ActivityDetails({ activity, cancelSelectActivity, openForm }: Props) {
  return (
    <Card fluid>
      <Image src={`assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span className="date">{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            basic
            color="blue"
            content="Edit"
            onClick={() => openForm(activity.id)}
          />
          <Button
            onClick={cancelSelectActivity}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}

export default ActivityDetails;
