import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, TableContainer, Heading } from "@chakra-ui/react";
import { useAuthContext } from "../hooks/useAuthContext";
import getProgress from "../requests/getProgress";
import Alert from "./Alert";
import AchievementCard from "./AchievementCard";

function Achievement() {
  const { user } = useAuthContext();
  const initialState = {
    achievements: [],
    alert: {
      message: "",
    },
  };

  const [achievements, setAchievements] = useState(initialState.achievements);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    getProgress(user).then((res) => {
      setAchievements(res.data);
      console.log(res.data);
      setAlert({
        message: "",
      });
    });
  }, [user]);

  if (!user)
    return (
      <div>
        <h2>You need to join a challenge</h2>
        <h3>
          View the available challenges <Link to="/"> here </Link>
        </h3>
      </div>
    );
  return (
    <Container>
      <Alert message={alert.message} />
      <Heading>Look how far you&apos;ve come!</Heading>
      <TableContainer>
        {achievements.map((achievement) => (
          <div className="achievement" key={achievement.id}>
            <AchievementCard {...achievement} />
          </div>
        ))}
      </TableContainer>
    </Container>
  );
}

export default Achievement;
