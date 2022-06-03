﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SCHM_API.Data;

#nullable disable

namespace SCHM_API.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("SCHM_API.Entities.AppCourses", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("Code")
                        .HasColumnType("int");

                    b.Property<string>("CourseDescrpition")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CourseName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("studentsEnrolled")
                        .HasColumnType("int");

                    b.Property<int>("teachersEnrolled")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("studentsEnrolled");

                    b.HasIndex("teachersEnrolled");

                    b.ToTable("Courses");
                });

            modelBuilder.Entity("SCHM_API.Entities.AppStudent", b =>
                {
                    b.Property<int>("Identitity")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Identitity"), 1L, 1);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Identitity");

                    b.ToTable("Students");
                });

            modelBuilder.Entity("SCHM_API.Entities.AppTeacher", b =>
                {
                    b.Property<int>("Identity")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Identity"), 1L, 1);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Identity");

                    b.ToTable("Teachers");
                });

            modelBuilder.Entity("SCHM_API.Entities.AppCourses", b =>
                {
                    b.HasOne("SCHM_API.Entities.AppStudent", "students")
                        .WithMany()
                        .HasForeignKey("studentsEnrolled")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SCHM_API.Entities.AppTeacher", "teachers")
                        .WithMany()
                        .HasForeignKey("teachersEnrolled")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("students");

                    b.Navigation("teachers");
                });
#pragma warning restore 612, 618
        }
    }
}
