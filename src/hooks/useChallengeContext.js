import { useAuthContext } from "./useAuthContext";

const useChallengeContext = () => {
  const { user } = useAuthContext();

  const selectChallenge = async (challenge) => {
    const response = await fetch("http://localhost:4000/challenges", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(challenge, user.userId),
    });

    if (!response.ok) {
      console.log(user.userId);
    }

    if (response.ok) {
      console.log(challenge);
    }
  };

  return { selectChallenge };
};

export default { useChallengeContext };
