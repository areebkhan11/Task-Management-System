import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation Register($name: String!, $email: String!, $password: String!, $role: String!) {
    register(name: $name, email: $email, password: $password, role: $role) {
      id
      email
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const CREATE_TASK = gql`
  mutation CreateTask($title: String!, $description: String!, $assignedTo: ID) {
    createTask(title: $title, description: $description, assignedTo: $assignedTo) {
      id
      title
      description
    }
  }
`;
