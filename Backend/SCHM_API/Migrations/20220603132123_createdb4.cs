using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SCHM_API.Migrations
{
    public partial class createdb4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    Identitity = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.Identitity);
                });

            migrationBuilder.CreateTable(
                name: "Courses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<int>(type: "int", nullable: false),
                    CourseName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CourseDescrpition = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    studentsEnrolled = table.Column<int>(type: "int", nullable: false),
                    teachersEnrolled = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Courses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Courses_Students_studentsEnrolled",
                        column: x => x.studentsEnrolled,
                        principalTable: "Students",
                        principalColumn: "Identitity",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Courses_Teachers_teachersEnrolled",
                        column: x => x.teachersEnrolled,
                        principalTable: "Teachers",
                        principalColumn: "Identity",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Courses_studentsEnrolled",
                table: "Courses",
                column: "studentsEnrolled");

            migrationBuilder.CreateIndex(
                name: "IX_Courses_teachersEnrolled",
                table: "Courses",
                column: "teachersEnrolled");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Courses");

            migrationBuilder.DropTable(
                name: "Students");
        }
    }
}
