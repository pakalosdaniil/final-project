import React, { createContext, useReducer } from "react";
import axios from "axios";

export const teamContext = createContext();

const API = "http://localhost:8000/team";
const INITIAL_STATE = {
  team: [],
  oneMember: null,
  pages: 0,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_TEAM":
      return {
        ...state,
        team: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };
    case "GET_ONE_MEMBER":
      return {
        ...state,
        oneMember: action.payload,
      };
    default:
      return state;
  }
}

const TeamContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  async function createMember(newMember) {
    await axios.post(API, newMember);
  }

  async function getTeam() {
    let response = await axios.get(`${API}${window.location.search}`);
    dispatch({
      type: "GET_TEAM",
      payload: response,
    });
  }

  async function getOneMember(id) {
    let response = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_MEMBER",
      payload: response.data,
    });
  }

  async function updatedMember(id, editedMember) {
    await axios.patch(`${API}/${id}`, editedMember);
    getOneMember();
  }

  async function deleteMember(id) {
    await axios.delete(`${API}/${id}`);
    getTeam();
  }

  return (
    <teamContext.Provider
      value={{
        team: state.team,
        oneMember: state.oneMember,
        editedMember: state.editedMember,
        pages: state.pages,
        createMember,
        getTeam,
        getOneMember,
        updatedMember,
        deleteMember,
      }}>
      {children}
    </teamContext.Provider>
  );
};

export default TeamContextProvider;
