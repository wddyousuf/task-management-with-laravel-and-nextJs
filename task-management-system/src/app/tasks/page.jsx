'use client';
import React, { useEffect, useState } from 'react';
import { axiosClient } from '@/helper/helper';
import { TASKS, USERS, TASK_ASSIGN } from '@/helper/routes';
import Link from 'next/link';
import { toast } from 'react-toastify';

function page() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({});
  const [tasks, setTasks] = useState([]);
  const [userId, setUserId] = useState('');
  const [taskId, setTaskId] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [modal, setModal] = useState();

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const getUsers = async () => {
    let response = await axiosClient().get(USERS);
    if (response?.status == 200) {
      setUsers(response?.data?.data);
    }
  };
  const addTask = async () => {
    let response = await axiosClient().post(TASKS, formData);
    $('#rejectTraining').modal('toggle');
    if (response?.status == 200) {
      let res = await axiosClient().post(TASK_ASSIGN, {
        assigned_to: formData.assigned,
        task_id: response?.data?.data?.id,
      });
      if (res?.status == 200) {
        toast.success(res?.data?.message);
        getTasks();
      }
    }
  };
  const getTasks = async () => {
    let response = await axiosClient().get(TASKS);
    if (response?.status == 200) {
      setTasks(response?.data?.data);
    }
  };
  const assignTask = async (id) => {
    let response = await axiosClient().post(TASK_ASSIGN, {
      assigned_to: userId,
      task_id: taskId,
    });
    $('#rejectTraining').modal('toggle');
    if (response?.status == 200) {
      toast.success(response?.data?.message);
      getTasks();
    }
  };
  const removeTask = async (id) => {
    let response = await axiosClient().delete(TASKS + '/' + id);
    if (response?.status == 200) {
      toast.success(response?.data?.message);
      getTasks();
    }
  };
  const getModalBody = () => {
    if (modal == 'assign') {
      return assignModal();
    } else if (modal == 'delete') {
      return deleteModal();
    } else if (modal == 'newTask') {
      return newTaskModal();
    }
  };
  const deleteModal = () => {
    // debugger
    return (
      <>
        <div class="text-center mb-4">
          <h3 class="role-title mb-2">Confirm Delete?</h3>
        </div>

        <div class="col-12 text-center mt-4">
          <button
            type="submit"
            class="btn btn-danger me-sm-3 me-1"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={(e) => {
              e.preventDefault();
              setDeleteConfirm(true);
            }}
          >
            Delete
          </button>
          <button
            type="reset"
            class="btn btn-label-secondary"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={(e) => {
              e.preventDefault();
              setDeleteConfirm(false);
            }}
          >
            Cancel
          </button>
        </div>
      </>
    );
  };
  const assignModal = () => {
    // debugger
    return (
      <>
        <div class="text-center mb-4">
          <h3 class="role-title mb-2">Assign Task</h3>
        </div>
        <form
          id="addRoleForm"
          class="row g-3"
          onSubmit={(e) => {
            e.preventDefault();
            assignTask(e);
          }}
        >
          <div class="col-12 mb-4">
            <label class="form-label" for="modalRoleName">
              Select User
            </label>
            <select
              id="assigned_to"
              class="select2 form-select select2-hidden-accessible"
              data-allow-clear="true"
              data-select2-id="assigned_to"
              tabindex="-1"
              aria-hidden="true"
              name="assigned_to"
              onChange={(e) => setUserId(e.target.value)}
            >
              {users.map((value, i) => {
                return <option value={value.id}>{value?.name}</option>;
              })}
            </select>
          </div>

          <div class="col-12 text-center mt-4">
            <button type="submit" class="btn btn-primary me-sm-3 me-1">
              Submit
            </button>
            <button
              type="reset"
              class="btn btn-label-secondary"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Cancel
            </button>
          </div>
        </form>
      </>
    );
  };

  const newTaskModal = () => {
    // debugger
    return (
      <>
        <div class="text-center mb-4">
          <h3 class="role-title mb-2">New Task</h3>
        </div>
        <form
          id="addRoleForm"
          class="row g-3"
          onSubmit={(e) => {
            e.preventDefault();
            addTask(e);
          }}
        >
          <div className="col-12 mb-4">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Title"
              id="title"
              name="title"
              onChange={handleInput}
              value={formData.title}
            />
          </div>
          <div className="col-12 mb-4">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Description"
              id="description"
              name="description"
              onChange={handleInput}
              value={formData.description}
            />
          </div>
          <div className="col-12 mb-4">
            <label htmlFor="deadline" className="form-label">
              Deadline
            </label>
            <input
              type="datetime-local"
              className="form-control"
              placeholder="Enter deadline"
              id="deadline"
              name="deadline"
              onChange={handleInput}
              value={formData.deadline}
            />
          </div>
          <div class="col-12 mb-4">
            <label class="form-label" for="modalRoleName">
              Assign User
            </label>
            <select
              id="assigned"
              class="select2 form-select select2-hidden-accessible"
              data-allow-clear="true"
              data-select2-id="assigned"
              tabindex="-1"
              aria-hidden="true"
              name="assigned"
              onChange={handleInput}
            >
              {users.map((value, i) => {
                return <option value={value.id}>{value?.name}</option>;
              })}
            </select>
          </div>

          <div class="col-12 text-center mt-4">
            <button type="submit" class="btn btn-primary me-sm-3 me-1">
              Submit
            </button>
            <button
              type="reset"
              class="btn btn-label-secondary"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Cancel
            </button>
          </div>
        </form>
      </>
    );
  };

  if (deleteConfirm) {
    removeTask(taskId);
    setDeleteConfirm(false);
  }
  useEffect(() => {
    getUsers();
    getTasks();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="card mb-4 popular-product-card">
            <div class="card-body">
              <div className="common-fieldset-main">
                <fieldset className="common-fieldset">
                  <legend className="rounded">All Tasks</legend>
                  <div className="row">
                    <div className="col-12 text-end">
                      <div
                        className="btn btn-primary mb-4"
                        data-bs-target="#rejectTraining"
                        data-bs-toggle="modal"
                        onClick={() => {
                          setModal('newTask');
                        }}
                      >
                        Add Task
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="table-responsive">
                      <table className="table table-bordered card-datatable">
                        <thead className="border-bottom datatables">
                          <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Created By</th>
                            <th>Assigned To</th>
                            <th>Deadline</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tasks?.map((task, key) => {
                            // debugger
                            return (
                              <tr>
                                <td>{key + 1}</td>
                                <td>
                                  <small className="text-muted">
                                    {task?.title}
                                  </small>
                                </td>
                                <td>
                                  <small className="text-muted">
                                    {task?.description}
                                  </small>
                                </td>
                                <td>
                                  <small className="text-muted">
                                    {task?.assigned_by?.name}
                                  </small>
                                </td>
                                <td>
                                  <small className="text-muted">
                                    {task?.assigned?.map((user) => {
                                      return <div>{user?.user?.name}</div>;
                                    })}
                                  </small>
                                </td>
                                <td>
                                  <small>{task?.deadline}</small>
                                </td>
                                <td>
                                  <small>
                                    <button
                                      className="btn btn-danger btn-xs mb-4"
                                      data-bs-target="#rejectTraining"
                                      data-bs-toggle="modal"
                                      onClick={() => {
                                        setModal('delete');
                                        setTaskId(task?.id);
                                      }}
                                    >
                                      Delete
                                    </button>
                                    <button
                                      className="btn btn-primary btn-xs mb-4"
                                      data-bs-target="#rejectTraining"
                                      data-bs-toggle="modal"
                                      onClick={() => {
                                        setModal('assign');
                                        setTaskId(task?.id);
                                      }}
                                    >
                                      Assign
                                    </button>
                                  </small>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Delete Confirmation Modal */}
      <div
        className="modal fade"
        tabindex="-1"
        id="rejectTraining"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered modal-add-new-role">
          <div class="modal-content p-3 p-md-5">
            <button
              type="button"
              class="btn-close btn-pinned"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div class="modal-body">{getModalBody()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
