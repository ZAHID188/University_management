using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SCHM_API.Migrations
{
    public partial class foreignkeyremovedfromcourse : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Courses_Students_studentsEnrolled",
                table: "Courses");

            migrationBuilder.DropForeignKey(
                name: "FK_Courses_Teachers_teachersEnrolled",
                table: "Courses");

            migrationBuilder.DropIndex(
                name: "IX_Courses_studentsEnrolled",
                table: "Courses");

            migrationBuilder.DropIndex(
                name: "IX_Courses_teachersEnrolled",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "studentsEnrolled",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "teachersEnrolled",
                table: "Courses");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "studentsEnrolled",
                table: "Courses",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "teachersEnrolled",
                table: "Courses",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Courses_studentsEnrolled",
                table: "Courses",
                column: "studentsEnrolled");

            migrationBuilder.CreateIndex(
                name: "IX_Courses_teachersEnrolled",
                table: "Courses",
                column: "teachersEnrolled");

            migrationBuilder.AddForeignKey(
                name: "FK_Courses_Students_studentsEnrolled",
                table: "Courses",
                column: "studentsEnrolled",
                principalTable: "Students",
                principalColumn: "Identitity",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Courses_Teachers_teachersEnrolled",
                table: "Courses",
                column: "teachersEnrolled",
                principalTable: "Teachers",
                principalColumn: "Identity",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
