import { getAllThreads, getDetailThread } from './threadAPI';
import { setThreads, setActiveThread } from './threadSlice';

export const fetchAllThreads = () => async (dispatch) => {
  try {
    const { data } = await getAllThreads();
    dispatch(setThreads(data.threads));
  } catch (error) {
    console.error('Error fetching all threads:', error);
  }
};

export const fetchDetailThread = (id) => async (dispatch) => {
  try {
    const { data } = await getDetailThread(id);
    dispatch(setActiveThread(data.detailThread));
  } catch (error) {
    console.error('Error fetching detail thread:', error);
  }
};
