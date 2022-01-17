
interface AdminAuth {
    adminToken: string,
    authError: string
}

interface AdminDashboard {
    adminCount: 0,
    classCount: 0,
    instructorCount: 0,
    studentCount: 0
}

interface Classes {
    id: number,
    course_name: string,
    strength: number,
    enrolledStudents: number,
    createdAt: string,
    Students: Array<any>
    Instructors: Array<any>
}

interface AdminViewClasses {
    classes: Array<Classes>
}

interface RootState {
    adminAuth: AdminAuth,
    adminDashboard: AdminDashboard
    adminViewClasses: AdminViewClasses
}

export default RootState