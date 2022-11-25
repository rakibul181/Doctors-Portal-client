import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const Allusers = () => {
  // const users = useLoaderData()
  // console.log(users);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"] ,
    queryFn: async () => {
      const res = await fetch("https://doctor-portal-server-sigma.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });
  const handelUpdateRole = (id) => {
    fetch(`https://doctor-portal-server-sigma.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorazation: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Set as a Admin");
          refetch();
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold">All Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role ? 
                    <button className="btn btn-xs btn-success">admin</button>
                  : 
                    <button
                      onClick={() => handelUpdateRole(user._id)}
                      className="btn btn-xs btn-secondary"
                    >
                      Make admin
                    </button>
                  }
                </td>
                <td>
                  <button className="btn btn-xs btn-secondary btn-error">
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allusers;
