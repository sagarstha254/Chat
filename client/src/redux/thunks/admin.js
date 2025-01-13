import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../constants/config";
import axios from "axios";

const adminLogin = createAsyncThunk("admin/login", async (secretKey) => {
  try {
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${server}/api/v1/admin/verify`,
      { secretKey },
      config
    );

    return data.message;
  } catch (error) {
    throw error.response.data.message;
  }
});

const getAdmin = createAsyncThunk("admin/getAdmin", async () => {
  try {
    const { data } = await axios.get(`${server}/api/v1/admin/`, {
      withCredentials: true,
    });

    return data.admin;
  } catch (error) {
    throw error.response.data.message;
  }
});

const adminLogout = createAsyncThunk("admin/logout", async () => {
  try {
    const { data } = await axios.get(`${server}/api/v1/admin/logout`, {
      withCredentials: true,
    });

    return data.message;
  } catch (error) {
    throw error.response.data.message;
  }
});

const getAdminStats = createAsyncThunk("admin/stats", async () => {
  try {
    const { data } = await axios.get(`${server}/api/v1/admin/stats`, {
      withCredentials: true,
    });

    return data.stats;
  } catch (error) {
    throw error.response.data.message;
  }
});

const getAllUsers = createAsyncThunk("admin/users", async () => {
  try {
    const { data } = await axios.get(`${server}/api/v1/admin/users`, {
      withCredentials: true,
    });

    return data;
  } catch (error) {
    throw error.response.data.message;
  }
});

const getAllChats = createAsyncThunk("admin/chats", async () => {
  try {
    const { data } = await axios.get(`${server}/api/v1/admin/chats`, {
      withCredentials: true,
    });

    return data;
  } catch (error) {
    throw error.response.data.message;
  }
});

const getAllMessages = createAsyncThunk("admin/messages", async () => {
  try {
    const { data } = await axios.get(`${server}/api/v1/admin/messages`, {
      withCredentials: true,
    });

    return data;
  } catch (error) {
    throw error.response.data.message;
  }
});

export {
  adminLogin,
  getAdmin,
  adminLogout,
  getAdminStats,
  getAllUsers,
  getAllChats,
  getAllMessages,
};
