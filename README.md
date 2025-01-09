# React Router DOM Nested Routes Issue

This repository demonstrates a common issue with nested routes in React Router DOM v6.  The provided code shows how a nested route under a parent route might not match correctly, despite the expected behavior.

## Problem

The `/about/contact` route is defined as a child of `/about`.  However, navigating directly to `/about/contact` does not render the `Contact` component. The `About` component is rendered instead, which isn't expected.

## Solution

The solution involves using `useRoutes` to resolve the nested routing issue and ensuring correct path matching. The solution is detailed in `bugSolution.js`.