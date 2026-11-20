
import { useEffect, useState } from 'react';

function ApplicationTracker() {
  const [applications, setApplications] = useState(() => {
    return JSON.parse(localStorage.getItem('applications') || '[]');
  });

  const [form, setForm] = useState({
    company: '',
    role: '',
    type: 'Internship',
    status: 'Applied',
    deadline: ''
  });

  const [editId, setEditId] = useState(null);

  // Dashboard statistics
  const totalApplications = applications.length;

  const underReview = applications.filter(
    app => app.status === 'Under Review'
  ).length;

  const selected = applications.filter(
    app => app.status === 'Selected'
  ).length;

  const today = new Date().toISOString().split('T')[0];

  const upcomingDeadlines = applications.filter(app => {
    return app.deadline && app.deadline >= today;
  }).length;

  // Save applications in browser storage
  useEffect(() => {
    localStorage.setItem('applications', JSON.stringify(applications));
  }, [applications]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function resetForm() {
    setForm({
      company: '',
      role: '',
      type: 'Internship',
      status: 'Applied',
      deadline: ''
    });
    setEditId(null);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editId !== null) {
      setApplications(applications.map(app =>
        app.id === editId ? { ...form, id: editId } : app
      ));
    } else {
      setApplications([
        ...applications,
        { ...form, id: Date.now() }
      ]);
    }

    resetForm();
  }

  function handleEdit(app) {
    setForm({
      company: app.company,
      role: app.role,
      type: app.type,
      status: app.status,
      deadline: app.deadline
    });

    setEditId(app.id);
  }

  function handleDelete(id) {
    setApplications(applications.filter(app => app.id !== id));

    if (editId === id) {
      resetForm();
    }
  }

  return (
    <section className="tracker-section" id="applications">

      <div className="tracker-heading">
        <p className="tagline">TAKE CONTROL OF YOUR FUTURE</p>
        <h2>Application Tracker</h2>
        <p>Manage all your opportunities in one place.</p>
      </div>

      {/* Dashboard Statistics */}
      <div className="stats-grid">

        <div className="stat-card">
          <p>Total Applications</p>
          <h2>{totalApplications}</h2>
        </div>

        <div className="stat-card">
          <p>Under Review</p>
          <h2>{underReview}</h2>
        </div>

        <div className="stat-card">
          <p>Selected</p>
          <h2>{selected}</h2>
        </div>

        <div className="stat-card">
          <p>Upcoming Deadlines</p>
          <h2>{upcomingDeadlines}</h2>
        </div>

      </div>

      {/* Add Application Form */}
      <form className="application-form" onSubmit={handleSubmit}>

        <h3>
          {editId !== null ? 'Edit Application' : 'Add New Application'}
        </h3>

        <div className="form-grid">

          <input
            name="company"
            placeholder="Company / Organization"
            value={form.company}
            onChange={handleChange}
            required
          />

          <input
            name="role"
            placeholder="Role / Opportunity"
            value={form.role}
            onChange={handleChange}
            required
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
          >
            <option>Internship</option>
            <option>Job</option>
            <option>Scholarship</option>
            <option>Hackathon</option>
          </select>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option>Applied</option>
            <option>Under Review</option>
            <option>Selected</option>
            <option>Rejected</option>
          </select>

          <input
            type="date"
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
          />

        </div>

        <button className="primary-btn" type="submit">
          {editId !== null ? 'Update Application' : '+ Add Application'}
        </button>

      </form>

      {/* Application List */}
      <div className="application-list">

        <h3>My Applications ({applications.length})</h3>

        {applications.length === 0 ? (

          <p className="empty-message">
            No applications yet. Add your first opportunity above!
          </p>

        ) : (

          applications.map(app => (
            <div className="application-item" key={app.id}>

              <div>
                <h4>{app.company}</h4>

                <p>{app.role} · {app.type}</p>

                <span className="status-label">
                  {app.status}
                </span>

                {app.deadline && (
                  <p>Deadline: {app.deadline}</p>
                )}
              </div>

              <div className="item-actions">

                <button onClick={() => handleEdit(app)}>
                  Edit
                </button>

                <button onClick={() => handleDelete(app.id)}>
                  Delete
                </button>

              </div>

            </div>
          ))

        )}

      </div>

    </section>
  );
}

export default ApplicationTracker;
